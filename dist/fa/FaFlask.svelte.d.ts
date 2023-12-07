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
export type FaFlaskProps = typeof __propDef.props;
export type FaFlaskEvents = typeof __propDef.events;
export type FaFlaskSlots = typeof __propDef.slots;
export default class FaFlask extends SvelteComponentTyped<FaFlaskProps, FaFlaskEvents, FaFlaskSlots> {
}
export {};
