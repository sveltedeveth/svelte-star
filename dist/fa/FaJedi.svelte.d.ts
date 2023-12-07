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
export type FaJediProps = typeof __propDef.props;
export type FaJediEvents = typeof __propDef.events;
export type FaJediSlots = typeof __propDef.slots;
export default class FaJedi extends SvelteComponentTyped<FaJediProps, FaJediEvents, FaJediSlots> {
}
export {};
