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
export type GiLeatherBootProps = typeof __propDef.props;
export type GiLeatherBootEvents = typeof __propDef.events;
export type GiLeatherBootSlots = typeof __propDef.slots;
export default class GiLeatherBoot extends SvelteComponentTyped<GiLeatherBootProps, GiLeatherBootEvents, GiLeatherBootSlots> {
}
export {};
