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
export type GiUnfriendlyFireProps = typeof __propDef.props;
export type GiUnfriendlyFireEvents = typeof __propDef.events;
export type GiUnfriendlyFireSlots = typeof __propDef.slots;
export default class GiUnfriendlyFire extends SvelteComponentTyped<GiUnfriendlyFireProps, GiUnfriendlyFireEvents, GiUnfriendlyFireSlots> {
}
export {};
