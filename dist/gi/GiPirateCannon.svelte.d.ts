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
export type GiPirateCannonProps = typeof __propDef.props;
export type GiPirateCannonEvents = typeof __propDef.events;
export type GiPirateCannonSlots = typeof __propDef.slots;
export default class GiPirateCannon extends SvelteComponentTyped<GiPirateCannonProps, GiPirateCannonEvents, GiPirateCannonSlots> {
}
export {};
