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
export type TiLockOpenProps = typeof __propDef.props;
export type TiLockOpenEvents = typeof __propDef.events;
export type TiLockOpenSlots = typeof __propDef.slots;
export default class TiLockOpen extends SvelteComponentTyped<TiLockOpenProps, TiLockOpenEvents, TiLockOpenSlots> {
}
export {};
