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
export type GiStaticGuardProps = typeof __propDef.props;
export type GiStaticGuardEvents = typeof __propDef.events;
export type GiStaticGuardSlots = typeof __propDef.slots;
export default class GiStaticGuard extends SvelteComponentTyped<GiStaticGuardProps, GiStaticGuardEvents, GiStaticGuardSlots> {
}
export {};
