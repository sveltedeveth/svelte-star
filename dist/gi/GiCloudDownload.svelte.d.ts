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
export type GiCloudDownloadProps = typeof __propDef.props;
export type GiCloudDownloadEvents = typeof __propDef.events;
export type GiCloudDownloadSlots = typeof __propDef.slots;
export default class GiCloudDownload extends SvelteComponentTyped<GiCloudDownloadProps, GiCloudDownloadEvents, GiCloudDownloadSlots> {
}
export {};
