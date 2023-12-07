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
export type GiBoneMaceProps = typeof __propDef.props;
export type GiBoneMaceEvents = typeof __propDef.events;
export type GiBoneMaceSlots = typeof __propDef.slots;
export default class GiBoneMace extends SvelteComponentTyped<GiBoneMaceProps, GiBoneMaceEvents, GiBoneMaceSlots> {
}
export {};
