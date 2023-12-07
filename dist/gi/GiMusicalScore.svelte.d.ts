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
export type GiMusicalScoreProps = typeof __propDef.props;
export type GiMusicalScoreEvents = typeof __propDef.events;
export type GiMusicalScoreSlots = typeof __propDef.slots;
export default class GiMusicalScore extends SvelteComponentTyped<GiMusicalScoreProps, GiMusicalScoreEvents, GiMusicalScoreSlots> {
}
export {};
