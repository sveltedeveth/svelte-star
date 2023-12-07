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
export type FaUtensilsProps = typeof __propDef.props;
export type FaUtensilsEvents = typeof __propDef.events;
export type FaUtensilsSlots = typeof __propDef.slots;
export default class FaUtensils extends SvelteComponentTyped<FaUtensilsProps, FaUtensilsEvents, FaUtensilsSlots> {
}
export {};
