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
export type GiPullProps = typeof __propDef.props;
export type GiPullEvents = typeof __propDef.events;
export type GiPullSlots = typeof __propDef.slots;
export default class GiPull extends SvelteComponentTyped<GiPullProps, GiPullEvents, GiPullSlots> {
}
export {};
