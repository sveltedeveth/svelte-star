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
export type GiStarsStackProps = typeof __propDef.props;
export type GiStarsStackEvents = typeof __propDef.events;
export type GiStarsStackSlots = typeof __propDef.slots;
export default class GiStarsStack extends SvelteComponentTyped<GiStarsStackProps, GiStarsStackEvents, GiStarsStackSlots> {
}
export {};
