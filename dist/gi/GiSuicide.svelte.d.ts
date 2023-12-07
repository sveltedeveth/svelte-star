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
export type GiSuicideProps = typeof __propDef.props;
export type GiSuicideEvents = typeof __propDef.events;
export type GiSuicideSlots = typeof __propDef.slots;
export default class GiSuicide extends SvelteComponentTyped<GiSuicideProps, GiSuicideEvents, GiSuicideSlots> {
}
export {};
