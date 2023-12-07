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
export type MdFileUploadProps = typeof __propDef.props;
export type MdFileUploadEvents = typeof __propDef.events;
export type MdFileUploadSlots = typeof __propDef.slots;
export default class MdFileUpload extends SvelteComponentTyped<MdFileUploadProps, MdFileUploadEvents, MdFileUploadSlots> {
}
export {};
