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
export type FaGalacticSenateProps = typeof __propDef.props;
export type FaGalacticSenateEvents = typeof __propDef.events;
export type FaGalacticSenateSlots = typeof __propDef.slots;
export default class FaGalacticSenate extends SvelteComponentTyped<FaGalacticSenateProps, FaGalacticSenateEvents, FaGalacticSenateSlots> {
}
export {};
