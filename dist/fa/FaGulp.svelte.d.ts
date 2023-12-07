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
export type FaGulpProps = typeof __propDef.props;
export type FaGulpEvents = typeof __propDef.events;
export type FaGulpSlots = typeof __propDef.slots;
export default class FaGulp extends SvelteComponentTyped<FaGulpProps, FaGulpEvents, FaGulpSlots> {
}
export {};
