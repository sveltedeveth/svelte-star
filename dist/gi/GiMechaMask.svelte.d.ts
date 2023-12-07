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
export type GiMechaMaskProps = typeof __propDef.props;
export type GiMechaMaskEvents = typeof __propDef.events;
export type GiMechaMaskSlots = typeof __propDef.slots;
export default class GiMechaMask extends SvelteComponentTyped<GiMechaMaskProps, GiMechaMaskEvents, GiMechaMaskSlots> {
}
export {};
