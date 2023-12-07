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
export type GiArmoredPantsProps = typeof __propDef.props;
export type GiArmoredPantsEvents = typeof __propDef.events;
export type GiArmoredPantsSlots = typeof __propDef.slots;
export default class GiArmoredPants extends SvelteComponentTyped<GiArmoredPantsProps, GiArmoredPantsEvents, GiArmoredPantsSlots> {
}
export {};
