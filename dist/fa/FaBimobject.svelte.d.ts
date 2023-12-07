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
export type FaBimobjectProps = typeof __propDef.props;
export type FaBimobjectEvents = typeof __propDef.events;
export type FaBimobjectSlots = typeof __propDef.slots;
export default class FaBimobject extends SvelteComponentTyped<FaBimobjectProps, FaBimobjectEvents, FaBimobjectSlots> {
}
export {};
