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
export type GiMedicinePillsProps = typeof __propDef.props;
export type GiMedicinePillsEvents = typeof __propDef.events;
export type GiMedicinePillsSlots = typeof __propDef.slots;
export default class GiMedicinePills extends SvelteComponentTyped<GiMedicinePillsProps, GiMedicinePillsEvents, GiMedicinePillsSlots> {
}
export {};
