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
export type GiLetterBombProps = typeof __propDef.props;
export type GiLetterBombEvents = typeof __propDef.events;
export type GiLetterBombSlots = typeof __propDef.slots;
export default class GiLetterBomb extends SvelteComponentTyped<GiLetterBombProps, GiLetterBombEvents, GiLetterBombSlots> {
}
export {};
