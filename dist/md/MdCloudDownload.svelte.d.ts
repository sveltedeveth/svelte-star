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
export type MdCloudDownloadProps = typeof __propDef.props;
export type MdCloudDownloadEvents = typeof __propDef.events;
export type MdCloudDownloadSlots = typeof __propDef.slots;
export default class MdCloudDownload extends SvelteComponentTyped<MdCloudDownloadProps, MdCloudDownloadEvents, MdCloudDownloadSlots> {
}
export {};
