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
export type FaJediOrderProps = typeof __propDef.props;
export type FaJediOrderEvents = typeof __propDef.events;
export type FaJediOrderSlots = typeof __propDef.slots;
export default class FaJediOrder extends SvelteComponentTyped<FaJediOrderProps, FaJediOrderEvents, FaJediOrderSlots> {
}
export {};
