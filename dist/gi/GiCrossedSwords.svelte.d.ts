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
export type GiCrossedSwordsProps = typeof __propDef.props;
export type GiCrossedSwordsEvents = typeof __propDef.events;
export type GiCrossedSwordsSlots = typeof __propDef.slots;
export default class GiCrossedSwords extends SvelteComponentTyped<GiCrossedSwordsProps, GiCrossedSwordsEvents, GiCrossedSwordsSlots> {
}
export {};
