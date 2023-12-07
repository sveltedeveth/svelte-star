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
export type GiSmallFireProps = typeof __propDef.props;
export type GiSmallFireEvents = typeof __propDef.events;
export type GiSmallFireSlots = typeof __propDef.slots;
export default class GiSmallFire extends SvelteComponentTyped<GiSmallFireProps, GiSmallFireEvents, GiSmallFireSlots> {
}
export {};
