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
export type MdVolumeMuteProps = typeof __propDef.props;
export type MdVolumeMuteEvents = typeof __propDef.events;
export type MdVolumeMuteSlots = typeof __propDef.slots;
export default class MdVolumeMute extends SvelteComponentTyped<MdVolumeMuteProps, MdVolumeMuteEvents, MdVolumeMuteSlots> {
}
export {};
