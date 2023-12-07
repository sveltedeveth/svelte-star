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
export type GiAlienSkullProps = typeof __propDef.props;
export type GiAlienSkullEvents = typeof __propDef.events;
export type GiAlienSkullSlots = typeof __propDef.slots;
export default class GiAlienSkull extends SvelteComponentTyped<GiAlienSkullProps, GiAlienSkullEvents, GiAlienSkullSlots> {
}
export {};
