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
export type GiStrikingSplinterProps = typeof __propDef.props;
export type GiStrikingSplinterEvents = typeof __propDef.events;
export type GiStrikingSplinterSlots = typeof __propDef.slots;
export default class GiStrikingSplinter extends SvelteComponentTyped<GiStrikingSplinterProps, GiStrikingSplinterEvents, GiStrikingSplinterSlots> {
}
export {};
