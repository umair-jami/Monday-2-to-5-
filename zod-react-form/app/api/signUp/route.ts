import { signUpSchema } from "@/lib/schemas";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  //   const result=signUpSchema.parse(data)
  //   Parse will throw  an error
  // {
  //     "code": "invalid_type",
  //     "expected": "string",
  //     "received": "number",
  //     "path": [
  //       "confirmPassword"
  //     ],
  //     "message": "Expected string, received number"
  //   }
  // ]
  // and safeParse will return undefined error like this
  const result = signUpSchema.safeParse(data);
  let zodError = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodError = { ...zodError, [issue.path[0]]: issue.message };
    });
  }
  //   { success: false, error: [Getter] }
  //   console.log(result);
  return NextResponse.json(
    Object.keys(zodError).length > 0
      ? {
          success: false,
          errors: zodError,
        }
      : {
          success: true,
        }
  );
}
