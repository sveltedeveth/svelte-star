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
export type GiSoccerFieldProps = typeof __propDef.props;
export type GiSoccerFieldEvents = typeof __propDef.events;
export type GiSoccerFieldSlots = typeof __propDef.slots;
export default class GiSoccerField extends SvelteComponentTyped<GiSoccerFieldProps, GiSoccerFieldEvents, GiSoccerFieldSlots> {
}
export {};
