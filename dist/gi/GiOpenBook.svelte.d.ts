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
export type GiOpenBookProps = typeof __propDef.props;
export type GiOpenBookEvents = typeof __propDef.events;
export type GiOpenBookSlots = typeof __propDef.slots;
export default class GiOpenBook extends SvelteComponentTyped<GiOpenBookProps, GiOpenBookEvents, GiOpenBookSlots> {
}
export {};
