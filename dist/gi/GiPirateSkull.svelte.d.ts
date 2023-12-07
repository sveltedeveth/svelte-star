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
export type GiPirateSkullProps = typeof __propDef.props;
export type GiPirateSkullEvents = typeof __propDef.events;
export type GiPirateSkullSlots = typeof __propDef.slots;
export default class GiPirateSkull extends SvelteComponentTyped<GiPirateSkullProps, GiPirateSkullEvents, GiPirateSkullSlots> {
}
export {};
