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
export type FaMaskProps = typeof __propDef.props;
export type FaMaskEvents = typeof __propDef.events;
export type FaMaskSlots = typeof __propDef.slots;
export default class FaMask extends SvelteComponentTyped<FaMaskProps, FaMaskEvents, FaMaskSlots> {
}
export {};
