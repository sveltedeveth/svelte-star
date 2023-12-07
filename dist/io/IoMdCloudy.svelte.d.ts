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
export type IoMdCloudyProps = typeof __propDef.props;
export type IoMdCloudyEvents = typeof __propDef.events;
export type IoMdCloudySlots = typeof __propDef.slots;
export default class IoMdCloudy extends SvelteComponentTyped<IoMdCloudyProps, IoMdCloudyEvents, IoMdCloudySlots> {
}
export {};
