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
export type GiTwoFeathersProps = typeof __propDef.props;
export type GiTwoFeathersEvents = typeof __propDef.events;
export type GiTwoFeathersSlots = typeof __propDef.slots;
export default class GiTwoFeathers extends SvelteComponentTyped<GiTwoFeathersProps, GiTwoFeathersEvents, GiTwoFeathersSlots> {
}
export {};
