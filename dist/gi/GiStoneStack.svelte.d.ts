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
export type GiStoneStackProps = typeof __propDef.props;
export type GiStoneStackEvents = typeof __propDef.events;
export type GiStoneStackSlots = typeof __propDef.slots;
export default class GiStoneStack extends SvelteComponentTyped<GiStoneStackProps, GiStoneStackEvents, GiStoneStackSlots> {
}
export {};
