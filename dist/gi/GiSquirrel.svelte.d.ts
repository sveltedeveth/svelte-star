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
export type GiSquirrelProps = typeof __propDef.props;
export type GiSquirrelEvents = typeof __propDef.events;
export type GiSquirrelSlots = typeof __propDef.slots;
export default class GiSquirrel extends SvelteComponentTyped<GiSquirrelProps, GiSquirrelEvents, GiSquirrelSlots> {
}
export {};
