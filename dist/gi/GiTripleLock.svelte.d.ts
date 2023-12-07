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
export type GiTripleLockProps = typeof __propDef.props;
export type GiTripleLockEvents = typeof __propDef.events;
export type GiTripleLockSlots = typeof __propDef.slots;
export default class GiTripleLock extends SvelteComponentTyped<GiTripleLockProps, GiTripleLockEvents, GiTripleLockSlots> {
}
export {};
