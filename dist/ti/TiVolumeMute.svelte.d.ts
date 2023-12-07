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
export type TiVolumeMuteProps = typeof __propDef.props;
export type TiVolumeMuteEvents = typeof __propDef.events;
export type TiVolumeMuteSlots = typeof __propDef.slots;
export default class TiVolumeMute extends SvelteComponentTyped<TiVolumeMuteProps, TiVolumeMuteEvents, TiVolumeMuteSlots> {
}
export {};
