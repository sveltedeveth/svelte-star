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
export type GiCigaretteProps = typeof __propDef.props;
export type GiCigaretteEvents = typeof __propDef.events;
export type GiCigaretteSlots = typeof __propDef.slots;
export default class GiCigarette extends SvelteComponentTyped<GiCigaretteProps, GiCigaretteEvents, GiCigaretteSlots> {
}
export {};
