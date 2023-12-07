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
export type GiMiracleMedecineProps = typeof __propDef.props;
export type GiMiracleMedecineEvents = typeof __propDef.events;
export type GiMiracleMedecineSlots = typeof __propDef.slots;
export default class GiMiracleMedecine extends SvelteComponentTyped<GiMiracleMedecineProps, GiMiracleMedecineEvents, GiMiracleMedecineSlots> {
}
export {};
