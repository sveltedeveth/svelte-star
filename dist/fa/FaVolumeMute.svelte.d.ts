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
export type FaVolumeMuteProps = typeof __propDef.props;
export type FaVolumeMuteEvents = typeof __propDef.events;
export type FaVolumeMuteSlots = typeof __propDef.slots;
export default class FaVolumeMute extends SvelteComponentTyped<FaVolumeMuteProps, FaVolumeMuteEvents, FaVolumeMuteSlots> {
}
export {};
