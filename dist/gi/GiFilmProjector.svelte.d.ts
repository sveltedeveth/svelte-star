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
export type GiFilmProjectorProps = typeof __propDef.props;
export type GiFilmProjectorEvents = typeof __propDef.events;
export type GiFilmProjectorSlots = typeof __propDef.slots;
export default class GiFilmProjector extends SvelteComponentTyped<GiFilmProjectorProps, GiFilmProjectorEvents, GiFilmProjectorSlots> {
}
export {};
