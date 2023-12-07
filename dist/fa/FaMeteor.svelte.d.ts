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
export type FaMeteorProps = typeof __propDef.props;
export type FaMeteorEvents = typeof __propDef.events;
export type FaMeteorSlots = typeof __propDef.slots;
export default class FaMeteor extends SvelteComponentTyped<FaMeteorProps, FaMeteorEvents, FaMeteorSlots> {
}
export {};
