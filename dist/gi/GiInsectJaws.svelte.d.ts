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
export type GiInsectJawsProps = typeof __propDef.props;
export type GiInsectJawsEvents = typeof __propDef.events;
export type GiInsectJawsSlots = typeof __propDef.slots;
export default class GiInsectJaws extends SvelteComponentTyped<GiInsectJawsProps, GiInsectJawsEvents, GiInsectJawsSlots> {
}
export {};
