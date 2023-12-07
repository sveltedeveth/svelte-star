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
export type DiCoffeescriptProps = typeof __propDef.props;
export type DiCoffeescriptEvents = typeof __propDef.events;
export type DiCoffeescriptSlots = typeof __propDef.slots;
export default class DiCoffeescript extends SvelteComponentTyped<DiCoffeescriptProps, DiCoffeescriptEvents, DiCoffeescriptSlots> {
}
export {};
