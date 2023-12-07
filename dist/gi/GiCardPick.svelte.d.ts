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
export type GiCardPickProps = typeof __propDef.props;
export type GiCardPickEvents = typeof __propDef.events;
export type GiCardPickSlots = typeof __propDef.slots;
export default class GiCardPick extends SvelteComponentTyped<GiCardPickProps, GiCardPickEvents, GiCardPickSlots> {
}
export {};
