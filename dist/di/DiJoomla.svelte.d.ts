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
export type DiJoomlaProps = typeof __propDef.props;
export type DiJoomlaEvents = typeof __propDef.events;
export type DiJoomlaSlots = typeof __propDef.slots;
export default class DiJoomla extends SvelteComponentTyped<DiJoomlaProps, DiJoomlaEvents, DiJoomlaSlots> {
}
export {};
