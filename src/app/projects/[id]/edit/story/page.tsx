import { Story } from "@/components/client/create-gather-steps/Story";

export default async function CreateGather(props: { params: { id: string } }) {
  return <Story id={props.params.id} />;
}
