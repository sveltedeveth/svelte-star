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
export type GiShinyIrisProps = typeof __propDef.props;
export type GiShinyIrisEvents = typeof __propDef.events;
export type GiShinyIrisSlots = typeof __propDef.slots;
export default class GiShinyIris extends SvelteComponentTyped<GiShinyIrisProps, GiShinyIrisEvents, GiShinyIrisSlots> {
}
export {};
