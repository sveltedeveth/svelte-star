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
export type IoMdVolumeMuteProps = typeof __propDef.props;
export type IoMdVolumeMuteEvents = typeof __propDef.events;
export type IoMdVolumeMuteSlots = typeof __propDef.slots;
export default class IoMdVolumeMute extends SvelteComponentTyped<IoMdVolumeMuteProps, IoMdVolumeMuteEvents, IoMdVolumeMuteSlots> {
}
export {};
