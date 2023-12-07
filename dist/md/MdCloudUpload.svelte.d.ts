import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MdCloudUploadProps = typeof __propDef.props;
export type MdCloudUploadEvents = typeof __propDef.events;
export type MdCloudUploadSlots = typeof __propDef.slots;
export default class MdCloudUpload extends SvelteComponentTyped<MdCloudUploadProps, MdCloudUploadEvents, MdCloudUploadSlots> {
}
export {};
